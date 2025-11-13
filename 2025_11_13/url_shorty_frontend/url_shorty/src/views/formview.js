export default class Formview {
    constructor(formEL) {
        this.formEL = formEL;
    }
    bind(onSubmit) {
        this.formEL.addEventListener("submit", async (e) => {
            e.preventDefault();
            const target = document.getElementById("target").value.trim();
            const slug = document.getElementById("custom-slug").value.trim() ||undefined
            await onSubmit({target, slug});
            document.getElementById("target").value="";
            document.getElementById("custom-slug").value="";
        })
    }
}