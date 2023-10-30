/**
 * Save an array of computers to local storage.
 *
 * @param {Array} computersArray - The array of computer objects to be saved.
 */
export const saveComputersToLocalStorage = (computersArray) => {
    try {
        if (localStorage) {
            localStorage.setItem('computers', JSON.stringify(computersArray));
        } else {
            console.error('Local storage is not available.');
        }
    } catch (error) {
        console.error('Error saving computers to local storage:', error);
    }
};

/**
 * Retrieve an array of computers from local storage.
 *
 * @returns {Array|null} An array of computer objects if found, or null if not found.
 */
export const getComputersFromLocalStorage = () => {
    try {
        if (localStorage) {
            const storedData = localStorage.getItem('computers');
            return storedData ? JSON.parse(storedData) : null;
        } else {
            console.error('Local storage is not available.');
            return null;
        }
    } catch (error) {
        console.error('Error retrieving computers from local storage:', error);
        return null;
    }
};

/**
 * Update the reservation status of a specific computer in local storage.
 *
 * @param {string} computerId - The ID of the computer to update.
 */
export const updateComputerReservationInLocalStorage = (computerId) => {
    try {
        if (localStorage) {
            const computersList = getComputersFromLocalStorage() || [];
            computersList.forEach((computer) => {
                if (computer.id === computerId) {
                    computer.reserved = true;
                }
            });
            localStorage.setItem('computers', JSON.stringify(computersList));
        } else {
            console.error('Local storage is not available.');
        }
    } catch (error) {
        console.error('Error updating computer status in local storage:', error);
    }
};
