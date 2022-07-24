import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    // Estilo para o componente.
    styleUrls: ['./star.component.css']
})


export class StarComponent implements OnChanges {
    // Variavel recebera um valor de um componente externo.
    @Input()
    rating: number = 0;

    // Usado para controlar o tamanho da div
    starWidth!: number;

    ngOnChanges(changes: SimpleChanges): void {
        // proporcao em que sera exibida a estrela
        this.starWidth = this.rating * 74 / 5;
    }
}
