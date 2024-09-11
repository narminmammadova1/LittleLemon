import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import ReservationForm from './ReservationForm';
import { fetchAPI, submitAPI } from '../../api';
import useModal from '../../hooks/useModal';
import ROUTER from '../../Constant/Router';

jest.mock('../../hooks/useModal', () => ({
  __esModule: true,
  default: () => ({
    isOpen: false,
    setIsOpen: jest.fn(),
  }),
}));

jest.mock('../../api', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

describe('ReservationForm', () => {
  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  test('renders form fields correctly', () => {
    render(<ReservationForm availableTimes={[]} updateTimes={jest.fn()} />);
    
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Place/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Surname/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Tel/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  });

  test('shows validation errors for required fields', async () => {
    render(<ReservationForm availableTimes={[]} updateTimes={jest.fn()} />);
    
    fireEvent.click(screen.getByText(/Reserve/i));
    
    // Check for validation error messages
    expect(await screen.findByText(/Tarih gerekli/i)).toBeInTheDocument();
    expect(await screen.findByText(/Saat gerekli/i)).toBeInTheDocument();
    expect(await screen.findByText(/Misafir sayısı gerekli/i)).toBeInTheDocument();
    expect(await screen.findByText(/Yer tercihi gerekli/i)).toBeInTheDocument();
    expect(await screen.findByText(/Ad gerekli/i)).toBeInTheDocument();
    expect(await screen.findByText(/Soyad gerekli/i)).toBeInTheDocument();
    expect(await screen.findByText(/Telefon numarası gerekli/i)).toBeInTheDocument();
    expect(await screen.findByText(/E-posta gerekli/i)).toBeInTheDocument();
  });

  test('does not open modal if email is invalid', async () => {
    submitAPI.mockResolvedValue(true); 
    render(<ReservationForm availableTimes={[]} updateTimes={jest.fn()} />);
    
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'invalid-email' } });
    fireEvent.click(screen.getByText(/Reserve/i));
    
    expect(await screen.findByText(/Geçerli bir e-posta adresi girin/i)).toBeInTheDocument();
  });

  test('opens modal and navigates on successful submission', async () => {
    submitAPI.mockResolvedValue(true);
    const mockSetIsOpen = jest.fn();
    useModal.mockReturnValue({ isOpen: false, setIsOpen: mockSetIsOpen });

    render(<ReservationForm availableTimes={[]} updateTimes={jest.fn()} />);
    
    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2024-09-15' } });
    fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '19:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });
    fireEvent.click(screen.getByLabelText(/Outside/i)); // Select place
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Surname/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Tel/i), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });

    fireEvent.click(screen.getByText(/Reserve/i));
    
    await waitFor(() => {
      expect(mockSetIsOpen).toHaveBeenCalledWith(true);
    });
  });
});