export const submitSelectedRating = async (rating: number) => {
  try {
    const response = await fetch('url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rating),
    });

    return await response.json();
  } catch (error) {
    console.error('Ошибка:', error);
    return null;
  }
};
