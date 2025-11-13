import Apiservice from "../services/apiservice.js";
import Linkmodel from "../models/linkmodel.js";
import Formview from "../views/formview.js";
import LinkListView from "../views/linklistview.js";

export default class Appcontroller {
    constructor() {
        this.api = new Apiservice();
        this.model = new Linkmodel();
        this.listView = new LinkListView();
        this.formView = new Formview();
    }

    init() {
        document.getElementById("apiBase").textContent = this.api.base;
        this.formView.bind(async ({target, slug}) => {
           try {
               await this.model.create(target, slug);
               alert("Kész! Rövid link létrehozva.");
           } catch (e) {
               alert(e.message);
           }
        });

        const search = document.getElementById("search");
        const sort = document.getElementById("sorts")
        const dir = document.getElementById("dir");
        const refresh = document.getElementById("refresh");

        const reload = () => this.model.load();
        search.addEventListener("input", () => {
           this.model.filters.q = search.value;
           reload();
        });
        sort.addEventListener("change", () => {
            this.model.filters.sort = sort.value;
            reload();
        });
        dir.addEventListener("change", () => {
            this.model.filters.dir = dir.value;
            reload();
        });
        refresh.addEventListener("click", reload);
        this.model.onChange(({items}) => this.listView.render(items));
        this.listView.on("open", (r) => window.open(`${this.api.base}/r/${r.slug}`, "blank"))
    }
}