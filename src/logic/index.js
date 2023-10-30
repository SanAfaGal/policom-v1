import { jsonComputers, jsonRooms } from "./constants";

const FREE_ROOM = 206

export const getFreeRoom = () => {
    try {
        // Retrieve the list of computers from the 'json' constant
        const roomList = jsonRooms.rooms;

        // Find a room object in the list based on the FREE_ROOM
        return roomList.find(room => room.id === FREE_ROOM);

    } catch (e) {
        // Handle any errors that occur during the process
        throw new Error('Error getting rooms');
    }
}

/**
 * Retrieves a list of computer objects with unique IDs and random statuses.
 *
 * @param {number} numberComputers - The number of computer objects to generate.
 * @returns {Array} An array of computer objects, each with a unique ID and a random status (reserved or not).
 * @throws {Error} If an error occurs during the process, an error is thrown.
 */
export const getComputers = (freeRoom) => {
    try {
        // Retrieve the list of computers from the 'json' constant
        const computerList = jsonComputers.computers;

        // Initialize an array to store computer objects with unique information
        const computersWithUniqueInfo = [];

        // Find a computer object in the list based on the numberRoom
        const computer = computerList.find(computer => computer.room === freeRoom.id);

        for (let i = 0; i < freeRoom.capacity; i++) {
            
            // Generate a random status (reserved or not)
            const randomStatus = Math.random() >= 0.5;

            // Create a unique computer object with an ID, room, and the random status
            const uniqueComputerInfo = {
                id: `${computer.id}${i + 1}`, // Unique ID by combining the original ID and index
                room: computer.room,
                reserved: randomStatus
            };

            // Add the unique computer object to the array
            computersWithUniqueInfo.push(uniqueComputerInfo);
        }

        return computersWithUniqueInfo;
    } catch (e) {
        // Handle any errors that occur during the process
        throw new Error('Error getting computers');
    }
};

