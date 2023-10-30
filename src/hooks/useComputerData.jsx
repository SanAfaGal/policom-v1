import { useState, useEffect } from 'react';
import { getComputers } from '../logic/index';
import { getComputersFromLocalStorage, saveComputersToLocalStorage } from '../logic/storage';

export function useComputerData() {
    const [computers, setComputers] = useState([]);

    useEffect(() => {
        const savedComputers = getComputersFromLocalStorage();

        if (savedComputers) {
            setComputers(savedComputers);
        } else {
            const newComputers = getComputers(10);
            setComputers(newComputers);
            saveComputersToLocalStorage(newComputers);
        }
    }, []);

    return computers;
}
