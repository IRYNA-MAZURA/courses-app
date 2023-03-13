import { Pipe } from "@angular/core";

@Pipe({
    name: 'customDate'
})
export class DatePipe {
    transform(value: string): string {
        const date = value.split('/');
        return `${date[0].length === 1 ? `0${date[0]}` : date[0]}.${date[1].length === 1 ? `0${date[1]}` : date[1]}.${date[2]}`;
    }
}