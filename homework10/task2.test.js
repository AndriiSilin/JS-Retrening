const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];

test('Testing userList', () => {
    expect(userList).toContain('admin');
    expect(userList[0]).toBe('Nick');
    expect(userList[4]).toBe('new_user_2');
    expect(userList.length).toEqual(5);
    expect(typeof userList[3] === 'string').toBeTruthy();
    expect(userList[8] === undefined).toBeTruthy();
})