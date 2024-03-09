export function formatDateTime(dateString: string): string {
  try {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);

    return formattedDate;
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid Date';
  }
}


const formatDate = (date: Date): string => {
    try {
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      };
  
      return date.toLocaleDateString(undefined, options);
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid Date';
    }
  };
  
  export { formatDate };