const useSaveToServer = () => {
  const postData = async (setSuccess, setImage, setLoading, e) => {
    const url =
      'https://script.google.com/macros/s/AKfycbzIErF6moiHBUmjbUXIWg60w3Q4uWbhSGpXWMlXAzXqTaAXhChx85H_rS4Hif-Iur3mag/exec';

    const formData = new FormData(e.target);

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        // set the success state to true
        setSuccess(true);
        // reset form inputs
        e.target.reset();
        // remove uploaded image
        setImage('');
      })
      .catch((err) => setLoading(false));
  };

  return postData;
};

export default useSaveToServer;
