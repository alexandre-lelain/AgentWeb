function addTextInWindow(bulle,character) {
    $(bulle).css({
        position : "relative",
        width: "100px",
        minHeight: "10px",
        border: "4px solid #4d4d4d",
        background: "#e6e6e6",
        borderRadius: "10px",
        textAlign: "center",
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft : "5px",
        paddingRight : "5px",
        color: "#4d4d4d",
        zIndex : "9999"
    });
    $(bulle).position({
        of: $(character),
        my: "top-95",
        at: "right+25"
    });
}
