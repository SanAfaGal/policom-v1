import { jsonComputers, jsonRooms } from "./constants";
import { getComputersFromLocalStorage, saveComputersToLocalStorage } from "./storage";

/**
 * Get a free room based on the current time.
 * @returns {Object} - A free room object.
 * @throws {Error} - Throws an error if there's an issue retrieving free rooms.
 */
export const getFreeRooms = () => {
    try {
        // Retrieve the list of rooms from the 'json' constant
        const roomList = jsonRooms.rooms;

        // Find available rooms based on the current time
        return getAvailableRooms(roomList);

    } catch (e) {
        // Handle any errors that occur during the process
        throw new Error('Error getting rooms');
    }
}

/**
 * Get available rooms for the current time.
 * @param {Array} roomData - An array of room data.
 * @returns {Array} - An array of available rooms.
 */
function getAvailableRooms(roomData) {
    // Get the current time as a Date object.
    const currentTime = new Date();
    currentTime.setHours(9)

    /**
     * Check if the current time falls within a given time interval and the room is available.
     * @param {Object} interval - The time interval to check.
     * @returns {boolean} - True if the current time is within the interval and the room is available, otherwise false.
     */
    const isWithinInterval = (interval) => {
        const startHour = interval.start;
        const endHour = interval.end;

        return (
            startHour <= currentTime.getHours() &&
            currentTime.getHours() < endHour &&
            interval.available
        );
    };

    /**
     * Filter the room data to find rooms with available intervals.
     * @param {Array} roomData - An array of room data.
     * @returns {Array} - An array of rooms that have available intervals.
     */
    return roomData.filter(
        (room) => room.availability.some(
            (interval) => isWithinInterval(interval)
        )
    );
}

/**
 * Retrieves a list of computer objects with unique IDs and random statuses.
 * @param {Object} roomSelected - The selected room object.
 * @returns {Array} - An array of computer objects, each with a unique ID and a random status (reserved or not).
 * @throws {Error} - Throws an error if there's an issue retrieving computer information.
 */
export const getComputers = (roomSelected) => {
    try {

        // Check if there are computers in local storage
        const computersFromLocalStorage = getComputersFromLocalStorage(roomSelected);

        // Return the computers from local storage
        if (computersFromLocalStorage) {
            return computersFromLocalStorage;
        }

        // Initialize an array to store computer objects with unique information
        const computersWithUniqueInfo = [];

        // Find the type of computer located in the roomSelected
        const computer = jsonComputers.computers.find(
            (computer) => computer.room === roomSelected.id
        );

        if (computer === undefined) {
            /**
             * Throw an error if no computers are found for the selected room.
             * @throws {Error} - An error is thrown to indicate that no matching computers were found for the selected room.
             */
            throw new Error('No computers found for the selected room.');
        }

        // Generate the number of computers that fit in the roomSelected
        for (let i = 0; i < roomSelected.capacity; i++) {

            // Generate a random status (reserved or not)
            const randomStatus = Math.random() >= 0.5;

            // Create a unique computer object with an ID, room, and the random status
            const uniqueComputerInfo = {
                // Unique ID by combining the original ID and index
                id: `${computer.id}${i + 1}`,
                room: computer.room,
                reserved: randomStatus,
            };

            // Add the unique computer object to the array
            computersWithUniqueInfo.push(uniqueComputerInfo);
        }

        // Save the generated computers to local storage
        saveComputersToLocalStorage(roomSelected, computersWithUniqueInfo);

        return computersWithUniqueInfo;
    } catch (e) {
        // Handle any errors that occur during the process
        throw new Error('Error getting computers');
    }
};

/**
 * Determines whether an email address belongs to a student or a teacher at 'elpoli.edu.co'.
 *
 * @param {string} email - The email address to be checked.
 * @returns {string} - Returns "Student" if the email belongs to a student, "Teacher" if it belongs to a teacher, or "Invalid Email" if the email does not match the expected patterns.
 */
export const determineEmailType = (email) => {
    if(email === undefined) return null
    
    // Regular expression to match a student email
    const studentRegex = /^[A-Za-z0-9_]+(\d+)[@]elpoli.edu.co$/;

    // Regular expression to match a teacher email
    const teacherRegex = /^[A-Za-z0-9_]+[@].+$/;
    // const teacherRegex = /^[A-Za-z0-9_]+[@]elpoli.edu.co$/;

    if (studentRegex.test(email)) {
        return 'Student';
    } else if (teacherRegex.test(email)) {
        return 'Teacher';
    } else {
        throw Error('Invalid email');
    }
};