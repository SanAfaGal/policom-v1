/**
 * Save an array of computers to local storage.
 *
 * @param {Object} room - The room associated with the computers.
 * @param {Array} computersArray - The array of computer objects to be saved.
 */
export const saveComputersToLocalStorage = (room, computersArray) => {
    try {
        if (localStorage) {
            localStorage.setItem(`computers-${room.id}`, JSON.stringify(computersArray));
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
 * @param {Object} room - The room associated with the computers.
 * @returns {Array|null} An array of computer objects if found, or null if not found.
 */
export const getComputersFromLocalStorage = (room) => {
    try {
        const storedData = localStorage.getItem(`computers-${room.id}`);
        return storedData ? JSON.parse(storedData) : null;
    } catch (error) {
        console.error('Error retrieving computers from local storage:', error);
        return null;
    }
};

/**
 * Update the reservation status of a specific computer in local storage.
 *
 * @param {Object} room - The room associated with the computers.
 * @param {string} computerId - The ID of the computer to update.
 */
export const updateComputerReservationInLocalStorage = (room, computerId) => {
    try {
        if (localStorage) {
            const computersList = getComputersFromLocalStorage(room) || [];
            computersList.forEach((computer) => {
                if (computer.id === computerId) {
                    computer.reserved = true;
                }
            });
            localStorage.setItem(`computers-${room.id}`, JSON.stringify(computersList));
        } else {
            console.error('Local storage is not available.');
        }
    } catch (error) {
        console.error('Error updating computer status in local storage:', error);
    }
};
