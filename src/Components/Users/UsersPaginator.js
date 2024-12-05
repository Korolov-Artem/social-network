const UsersPaginator = (totalUsersCount, pageSize, currentPage) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let currentP = currentPage;
    let currentPLeft;
    let currentPRight;

    if (currentP <= 5) {
        currentPLeft = 0;
        currentPRight = 9;
    } else {
        currentPLeft = currentP - 5;
        currentPRight = currentP + 4;
    }

    return pages.slice(currentPLeft, currentPRight)
}

export default UsersPaginator