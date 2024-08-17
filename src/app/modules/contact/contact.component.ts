import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { SubjectOptions } from "../../shared/enums/contact-subject.enum";
import { MailService } from "../../shared/services/mail.service";
import { ErrorService } from "../../shared/services/error.service";
import { ValidationMessageComponent } from "../../common/components/validation-message/validation-message.component";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { ArtworkOptions } from "../../shared/enums/artwork-option.enum";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ValidationMessageComponent
    ]
})
export class ContactComponent implements OnInit {

    protected contactForm: FormGroup;
    protected hasReferenceNr: boolean; 
    protected hasValidReferenceNr: boolean; // TODO(yqni13): add method to check input value length=6
    protected hasReferenceFromParams: boolean;
    protected readonly: boolean;
    protected selectedReference: string | null;
    protected subjectOptions = Object.values(SubjectOptions);
    protected artworkOptions = Object.values(ArtworkOptions);

    constructor(
        private mailService: MailService,
        private errorService: ErrorService,
        private router: ActivatedRoute,
        private fb: FormBuilder
    ) {
        this.contactForm = new FormGroup({});
        this.hasReferenceNr = false;
        this.hasValidReferenceNr = false;
        this.hasReferenceFromParams = false;
        this.readonly = false;
        this.selectedReference = null;

        this.router.queryParamMap.subscribe(params => {
            this.selectedReference = params.get('referenceNr');
            if(this.selectedReference !== null) {
                this.hasReferenceFromParams = true;
                this.readonly = true;
            }
        })

    }
    
    ngOnInit() {
        this.checkForReferenceNr();
        this.initEdit();
    }
    
    private initForm() {

        // TODO(yqni13): add validators

        this.contactForm = this.fb.group({
            subject: new FormControl('', Validators.required),
            referenceNr: new FormControl(''), // TODO(yqni13): custom validator to check for 6 char or valid referenceNr
            type: new FormControl(''),
            email: new FormControl('', [Validators.required, Validators.email]),
            honorifics: new FormControl('', Validators.required),
            title: new FormControl(''),
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            message: new FormControl('', Validators.required)
        })
    }

    private initEdit() {
        this.initForm();
        this.contactForm.patchValue({
            subject: this.hasReferenceNr ? SubjectOptions.artOrder : '',
            referenceNr: this.hasReferenceNr ? this.selectedReference : '',
            type: '',
            email: '',
            honorifics: '',
            title: '',
            firstName: '',
            lastName: '',
            message: ''
        })
    }

    private checkForReferenceNr() {
        if(this.selectedReference !== null) {
            this.hasReferenceNr = true;
        } else {
            this.hasReferenceNr = false;
        }
    }    

    onSubmit() {
        this.contactForm.markAllAsTouched();
        
        if(this.contactForm.invalid) {
            console.log('form invalid', this.contactForm);
            return;
        }

        this.mailService.setMailData(this.contactForm.getRawValue());
        this.mailService.sendMail().subscribe();
    }

}