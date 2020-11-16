import {usersObj} from "./08_01";


beforeEach(() => {

})

test("should select corresponding user from obj", () => {
    expect(usersObj[0]).toBe('Leha');
    expect(usersObj[1]).toBe('Susan');
    expect(usersObj[2]).toBe('Mary');
    expect(usersObj[3]).toBe('Kassy');
})