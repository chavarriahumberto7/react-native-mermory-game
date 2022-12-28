/* eslint-disable prettier/prettier */
import { ICONS } from "../../dataBase";
export const createMatrix = ({ matrixType }) => {
    // * creating array  to fill in the table
    const maxValue = Math.pow(matrixType, 2) / 2;
    const valueArrays = [];
    const { setIcons1 } = ICONS;


    for (let i = 1; i <= maxValue; i++) {
        valueArrays.push(i, i);

    }

    // * unsorting array

    valueArrays.sort(() => Math.random() - 0.5);

    const matrix = [];
    let counter = 0;
    for (let index = 0; index < matrixType; index++) {
        const row = [];
        for (let j = 0; j < matrixType; j++) {
            row.push({
                id: counter + 1,
                isFlipped: false,
                row: index,
                col: j,
                value: valueArrays[counter],
                url: setIcons1[valueArrays[counter]].url,
            });
            counter++;
        }
        matrix.push(row);
    }
    return matrix;
};

