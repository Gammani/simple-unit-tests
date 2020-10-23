import {StudentType} from "../02/02";
import {GovernmentBuildingType, HouseType} from "../02/02_02";


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    });
}

export function makeStudentActive(student: StudentType) {
    student.isActive = true;
}

export const doesStudentLiveIn = (student: StudentType, cityName: string) => {
    return student.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true;
}

export function toFireStaff(building: GovernmentBuildingType, staffCountToFire: number) {
    building.staffCount -= staffCountToFire;
}

export const toHireStaff = (building: GovernmentBuildingType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire;
}