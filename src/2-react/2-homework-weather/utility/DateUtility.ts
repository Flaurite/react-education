const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

function getDay(date: number): number {
    return new Date(date).getDay();
};

export const dateUtility: DateUtility = {
    getDayName: (date: number): string => {
        console.log(new Date(date).toDateString());
        return days[getDay(date)];
    }

}

interface DateUtility {
    getDayName(date: number): string;
}