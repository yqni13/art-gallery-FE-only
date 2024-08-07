import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SubjectOptions } from "../../shared/enums/contact-subject.enum";
import { MailService } from "../../shared/services/mail.service";
import { ErrorService } from "../../shared/services/error.service";
// import { ContactMailItem } from "../../shared/interfaces/ContactMailItems";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class ContactComponent implements OnInit {

    @Input() selectedReference!: string;

    protected contactForm: FormGroup;
    protected hasReferenceNr: boolean;
    protected subjectOptions = Object.values(SubjectOptions);

    constructor(
        private mailService: MailService,
        private errorService: ErrorService
    ) {
        this.contactForm = new FormGroup({});
        this.hasReferenceNr = false;
    }

    ngOnInit() {
        this.checkForReferenceNr();
        this.initEdit();
    }
    
    private initForm() {

        // TODO(yqni13): add validators

        this.contactForm = new FormGroup({
            subject: new FormControl(null),
            referenceNr: new FormControl(null),
            email: new FormControl(null),
            firstName: new FormControl(null),
            lastName: new FormControl(null),
            message: new FormControl(null)
        })
    }

    private initEdit() {
        this.initForm();
        this.contactForm.patchValue({
            subject: '',
            referenceNr: this.hasReferenceNr ? this.selectedReference : '', 
            email: '',
            firstName: '',
            lastName: '',
            message: ''
        })
    }

    private checkForReferenceNr() {
        if(this.selectedReference && this.selectedReference.length > 0) {
            this.hasReferenceNr = true;
        } else {
            this.hasReferenceNr = false;
        }
    }

    onSubmit() {        
        // try {
        //     this.mailService.setMailData(this.contactForm.getRawValue());
        //     this.mailService.sendMail();
        // } catch(err) {
            //     this.errorService.handle(err);
            // }
        this.mailService.setMailData(this.contactForm.getRawValue());
        this.mailService.sendMail().subscribe();
    }

}