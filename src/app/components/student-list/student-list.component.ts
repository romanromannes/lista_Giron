import { Component, OnInit } from '@angular/core';
import { StudentInterface } from 'src/app/models/student-interface';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: StudentInterface[];
  studentsFromDb: StudentInterface[] = [
    {
      name: 'Julian',
      surname: 'Alvares',
      email: 'jalvares@gmail.com',
      qualification: 9,
      course: 'Angular',
      pic: 'https://www.clarin.com/img/2021/11/09/julian-alvarez-le-marco-dos___FnIPewHYt_2000x1500__1.jpg',
    },
    {
      name: 'Clint',
      surname: 'Eastwood',
      email: '',
      qualification: 4,
      course: 'Angular',
      pic: 'https://decine21.com/img/upload/perfiles/clint-eastwood-6268/clint-eastwood-2-32318-c.jpg',
    },
    {
      name: 'Pipa',
      surname: 'Benedetto',
      email: 'pipaGoool@gmail.com',
      qualification: 7,
      course: 'React',
      pic: 'https://depor.com/resizer/_FH_OHRnoNx722o50vJS7wuJ7h8=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6SAS2YD6LBCU3PDMIXBTUOG2ZQ.jpg',
    },
    {
      name: 'Jhon',
      surname: 'Dhoe',
      email: '',
      qualification: 3,
      course: 'RUST',
      pic: '',
    },
    {
      name: 'El Dieeeee',
      surname: 'Maradona',
      email: 'fafafafafa@gmail.com',
      qualification: 8,
      course: 'VUEjs',
      pic: 'https://qph.fs.quoracdn.net/main-qimg-5286998c47ba453148afd9c275600257-lq',
    },
    {
      name: 'Mick',
      surname: 'Jagger',
      email: 'rollingstones@gmail.com',
      qualification: 9,
      course: 'ANGULAR',
      pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDbQJdzd0ogjVLvtlNGYHPqwiz8K2W1TVIFg&usqp=CAU',
    },
    {
      name: 'Donaldo',
      surname: 'Trump',
      email: '$$$dtrump@gmail.com',
      qualification: 10,
      course: 'Angular',
      pic: 'https://phantom-marca.unidadeditorial.es/1abdc185589070abc050b8311341256b/resize/1320/f/jpg/assets/multimedia/imagenes/2022/04/27/16510379667615.jpg',
    },
    {
      name: 'Markos',
      surname: 'Zuckerberg',
      email: 'zzuckmdik@yahoo.com',
      qualification: 2,
      course: 'React',
      pic: 'https://imagenes.elpais.com/resizer/OMsGb9uA7neAz7qa6CjwM-r6-KQ=/1960x1103/ep01.epimg.net/elpais/imagenes/2016/08/22/estilo/1471863520_847471_1471867080_noticia_fotograma.jpg',
    },
    {
      name: 'Arnold',
      surname: 'Schuarsgggnehherchrr',
      email: 'chuarzy@live.com',
      qualification: 6,
      course: 'C++',
      pic: 'data:image/jpeg;base64,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',
    },
  ];

  constructor() {
    this.students = this.studentsFromDb;
  }

  showOnlyApproved() : void {
    this.students = this.studentsFromDb.filter(x => x.qualification >= 5)
  }

  showOnlyDisapproved() : void {
    this.students = this.studentsFromDb.filter(x => x.qualification <= 5)
  }

  showAll() : void {
    this.students = this.studentsFromDb;
  }

  ngOnInit(): void {}
}
