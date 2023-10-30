import { json } from "./constants";

/**
 * Retrieves a list of computer objects with unique IDs and random statuses.
 *
 * @param {number} numberComputers - The number of computer objects to generate.
 * @returns {Array} An array of computer objects, each with a unique ID and a random status (reserved or not).
 * @throws {Error} If an error occurs during the process, an error is thrown.
 */
export const getComputers = (numberComputers) => {
    try {
        // Retrieve the list of computers from the 'json' constant
        const computerList = json.computers;

        // Initialize an array to store computer objects with unique information
        const computersWithUniqueInfo = [];

        for (let i = 0; i < numberComputers; i++) {
            // For simplicity, we use the same computer object from the list (computerList[0])
            const computer = computerList[0];

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

