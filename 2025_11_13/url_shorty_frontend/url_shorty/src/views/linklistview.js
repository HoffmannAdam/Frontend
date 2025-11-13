export default class LinkListView {
    constructor(tbody) {
        this.tbody = tbody;
        this.handlers = {
            open: null,
            copy: null,
            editTarget: null,
            editSlug: null,
            remove: null
        }
    }

    on(event, handler) {
        this.handlers[event] = handler;
    }
    render(items) {
        if (!items.length) {
            this.tbody.innerHTML = `<tr><td colspan="5">Nincs találat</td>></tr>`
            return;
        }
        this.tbody.innerHTML = "";
        for (const r of items) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td class="slug">${r.slug}</td>
            <td class="hide-sm">${location.origin.replace(/:\d+$/,"")}:3000/r/${r.slug}</td>
            <td>${r.target}</td>
            <td>${r.click}</td>
            <td></td>
            `
            const actions = tr.lastElementChild;
            const mk = (t) =>  {
                const b = document.createElement('button');
                b.type = 'button';
                b.textContent = t;
                return b;
            }
            const openButton = mk("Megnyitás");
            openButton.addEventListener("click", () => {
                this.handlers.open?.(r);
            })

            const copyButton = mk("Másolás");
            copyButton.addEventListener("click", () => {
                this.handlers.copy?.(r, copyButton);
            })

            const editTargetButton = mk("Cél szerkesztése");
            editTargetButton.addEventListener("click", () => {
                this.handlers.editTarget?.(r);
            })

            const editSlugButton = mk("Slug szerkesztése");
            editSlugButton.addEventListener("click", () => {
                this.handlers.editSlug?.(r);
            })

            const removeButton = mk("Törlés")
            removeButton.addEventListener("click", () => {
                this.handlers.remove?.(r);
            })

            actions.append(openButton, copyButton, editTargetButton, editSlugButton, removeButton);
            this.tbody.append(tr);
        }
    }

}