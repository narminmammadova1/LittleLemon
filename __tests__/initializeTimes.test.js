import { initializeTimeS } from '../src/Pages/Reservation/ReservationPage'; // İşlevinizin doğru yolunu belirtin
import { fetchAPI } from '../src/api'; // API işlevinin yolu

jest.mock("../src/api"); // API işlevini mock'lamak için/



describe('initializeTimes', () => {
    it('should call fetchAPI and return a non-empty array of times', async () => {
      // Mock fetchAPI to return a non-empty array
      fetchAPI.mockResolvedValue(['17:00', '18:00', '19:00']);
  
      const result = await initializeTimes();
  
      expect(fetchAPI).toHaveBeenCalledTimes(1);
      expect(result).toEqual(['17:00', '18:00', '19:00']);
      expect(result.length).toBeGreaterThan(0);
    });
  });