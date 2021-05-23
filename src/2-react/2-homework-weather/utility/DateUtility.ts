const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

function getDay(date: number): number {
    return new Date(date).getDay();
};

export const dateUtility: DateUtility = {
    getDayName: (date: number): string => {
        return days[getDay(date)];
    }

}

interface DateUtility {
    getDayName(date: number): string;
}