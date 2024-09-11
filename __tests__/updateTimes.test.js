import { initializeTimeS } from '../src/Pages/Reservation/ReservationPage'; // İşlevinizin doğru yolunu belirtin
import { fetchAPI } from '../src/api'; // API işlevinin yolu

jest.mock("../src/api"); // API işlevini mock'lamak için/


describe('updateTimes', () => {
    it('should call fetchAPI with the selected date and return available times', async () => {
      const selectedDate = '2024-09-10'; // Test için örnek bir tarih
      const mockTimes = ['17:00', '18:00', '19:00'];
      
      // Mock fetchAPI to return mockTimes for the selected date
      fetchAPI.mockResolvedValue(mockTimes);
  
      const result = await updateTimes(selectedDate);
  
      expect(fetchAPI).toHaveBeenCalledWith(selectedDate);
      expect(result).toEqual(mockTimes);
      expect(result.length).toBe(mockTimes.length);
    });
  });