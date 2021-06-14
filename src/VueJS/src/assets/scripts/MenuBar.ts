export default {
    props: ["buttons", "title"],
    methods: {
        eval(code: string) {
            eval(code);
        }
    }
};