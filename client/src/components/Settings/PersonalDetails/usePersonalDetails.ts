import React from 'react';

function usePersonalDetails() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};
  return {handleSubmit};
}
 export default usePersonalDetails;
 