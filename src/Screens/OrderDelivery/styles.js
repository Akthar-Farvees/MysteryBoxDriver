import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: { flex: 1, backgroundColor: 'black' },

    handleIndicatorStyle: { backgroundColor: 'grey', width: 100, },

    handleIndicatorContainer: { marginTop: 10, marginBottom: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },

    routeDetailsText: { fontSize: 24, letterSpacing: 1, fontWeight: "500" },

    deliveryDetailsContainer: { paddingHorizontal: 20 },

    restaurantName: { fontSize: 24, marginVertical: 20, fontWeight: "500", letterSpacing: 1 },

    addressContainer: { flexDirection: 'row', marginBottom: 20, alignItems: 'center' },

    addressText: { fontSize: 20, color: 'grey', fontWeight: "500", letterSpacing: 1, marginLeft: 15, textAlign: 'center' },

    orderDetailsContainer: { borderTopWidth: 1, borderColor: 'lightgrey', paddingTop: 20 },

    orderItemText: { fontSize: 17, color: "grey", fontWeight: "500", letterSpacing: 0.5, marginBottom: 5, },

    buttonContainer: { backgroundColor: '#FFE030', marginTop: "auto", marginVertical: 30, marginHorizontal: 10, borderRadius: 10, },

    buttonText: { color: 'black', paddingVertical: 13, letterSpacing: 0.5, fontSize: 22, fontWeight: "500", textAlign: "center", justifyContent: "center" }

});