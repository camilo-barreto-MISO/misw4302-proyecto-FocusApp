import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModulosMaterial } from '../../modulos.material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

enum TaskStatus {
  startTask = 'start',
  running = 'running',
  startBreak = 'startBreak',
}

@Component({
  selector: 'app-focus-container',
  standalone: true,
  imports: [ModulosMaterial, ReactiveFormsModule, CommonModule],
  templateUrl: './focus-container.component.html',
  styleUrls: ['./focus-container.component.scss'],
})
export class FocusContainerComponent implements OnInit {
  dialog = inject(MatDialog);
  TaskStatus = TaskStatus;
  statusFocus: TaskStatus = TaskStatus.startTask;
  intervalId!: number;
  isPaused: boolean = false;
  starPomodoro = false;

  form: FormGroup = new FormGroup({
    minutes: new FormControl('25'),
    seconds: new FormControl('00'),
  });

  get seconds() {
    return parseInt(this.form.get('seconds')?.value, 10);
  }

  get minutes() {
    return parseInt(this.form.get('minutes')?.value, 10);
  }

  get statusText(): string {
    switch (this.statusFocus) {
      case TaskStatus.startTask:
        return '1 de 4 sesiones';
      case TaskStatus.running:
        return 'Focus...';
      case TaskStatus.startBreak:
        return '¡Es tiempo del descanso 1 de 4!';
      default:
        return 'Estado desconocido';
    }
  }

  get mostrarCargando() {
    return (
      (this.isRunning && !this.isPaused) ||
      (this.isStartBreak && !this.isPaused)
    );
  }

  get isRunning(): boolean {
    return this.statusFocus === TaskStatus.running;
  }

  get isStartBreak(): boolean {
    return this.statusFocus === TaskStatus.startBreak;
  }

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.starPomodoro = params['starPomodoro'] === true;
    });
    this.validateStatus();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.starPomodoro = params['starPomodoro'] === 'true';
      this.validateStatus();
    });
  }

  validateStatus() {
    if (this.isStartBreak) {
      this.form.patchValue({
        minutes: '05',
        seconds: '00',
      });
    }
  }

  startData() {
    this.starPomodoro = false;
    this.isPaused = true;
    this.form.patchValue({
      minutes: '25',
      seconds: '00',
    });
    this.statusFocus = TaskStatus.startTask;
    this.stopTimer();
  }

  startTask() {
    this.statusFocus = TaskStatus.running;
    this.toggleTimer();
  }

  startTimer() {
    this.intervalId = window.setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  updateTimer() {
    let minutes = this.minutes;
    let seconds = this.seconds;

    if (seconds === 0) {
      if (minutes === 0) {
        this.stopTimer();
        this.statusFocus = TaskStatus.startBreak;
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }

    this.updateForm(minutes, seconds);
  }

  updateForm(minutes: number, seconds: number) {
    this.form.patchValue({
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
    });
  }

  toggleTimer() {
    if (this.intervalId) {
      this.stopTimer();
      this.isPaused = true;
    } else {
      this.isPaused = false;
      this.startTimer();
    }
  }

  stopTimer() {
    clearInterval(this.intervalId);
    this.intervalId = 0;
  }

  startBreak() {
    this.isPaused = true;
    this.statusFocus = TaskStatus.startBreak;
    this.validateStatus();
    this.stopTimer();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.startData();
      }
    });
  }
}
