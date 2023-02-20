import { Pipe } from "@angular/core";

@Pipe({
    name: 'duration'
})
export class DurationPipe {
    transform(value: number): string {
        const hours = Math.floor(value / 60);
        const minutes = value % 60;

        return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes} hours`;
    }
}