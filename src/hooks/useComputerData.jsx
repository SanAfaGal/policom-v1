import { useState, useEffect } from 'react';
import { getComputers, getFreeRoom } from '../logic/index';
import { getComputersFromLocalStorage, saveComputersToLocalStorage } from '../logic/storage';



export function useComputerData() {
    const [computers, setComputers] = useState([]);

    useEffect(() => {
        const savedComputers = getComputersFromLocalStorage();
        const freeRoom = getFreeRoom()

        if (savedComputers) {
            setComputers(savedComputers);
        } else {
            const newComputers = getComputers(freeRoom);
            setComputers(newComputers);
            saveComputersToLocalStorage(newComputers);
        }
    }, []);

    return computers;
}
