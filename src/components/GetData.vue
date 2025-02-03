<template>
    <v-container>
        <v-card class="pa-4">
            <v-card-title>Select Dataset to Download</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col>
                        <!-- City Selection -->
                        <v-select v-model="selectedCity" :items="cityNames" label="Select City" outlined
                            dense></v-select>
                    </v-col>

                    <v-col>

                        <!-- Dataset Type Selection -->
                        <v-select v-model="selectedType" :items="datasetTypes" label="Select Data Type" outlined
                            dense></v-select>

                    </v-col>

                </v-row>
                <v-row justify="center">
                    <!-- Download Button -->
                    <v-btn :disabled="!selectedType || !selectedCity" color="primary" variant="elevated" class="mt-4"
                        @click="downloadDataset">
                        <v-icon left>mdi-download</v-icon>
                        Download Dataset
                    </v-btn>

                    <!-- Download Button
                    <v-btn :disabled="!selectedType || !selectedCity" color="primary" variant="elevated" class="mt-4"
                        @click="downloadDataset">
                        <v-icon left>mdi-download</v-icon>
                        Download Dataset
                    </v-btn> -->
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script setup>
import { ref } from "vue";

const baseUrl = "https://raw.githubusercontent.com/chuanlongZhou/indian_100_data/main/data/";

// Dataset type selection
const datasetTypes = ["Time Series Data", "Gridded Map Data"]


const cityNames = [
    'Total', 'Delhi', 'Mumbai', 'Bengaluru', 'Ghaziabad', 'Faridabad',
    'Kolkata', 'Hyderabad', 'Chennai', 'Noida', 'Ahmedabad', 'Pune',
    'Lucknow', 'Jaipur', 'Surat', 'Patna', 'Kanpur', 'Aligarh',
    'Indore', 'Vadodara', 'Dhanbad', 'Raipur', 'Moradabad', 'Agra',
    'Gwalior', 'Varanashi', 'Kota', 'Meerut', 'Bareilly', 'Amritsar',
    'Bhopal', 'Bhilainagar', 'Rajkot', 'Jamshedpur', 'Muzaffarpur',
    'Kochi', 'Chandigarh', 'Aurangabad', 'Jabalpur',
    'Thiruvananthapuram', 'Ranchi', 'Ludhiana', 'Cuttack', 'Madurai',
    'Gaya', 'Nashik', 'Warangal', 'Srinagar', 'Tiruppur', 'Coimbatore',
    'Jammu', 'Mysuru', 'Erode', 'Jalandhar', 'Jodhpur', 'Solapur',
    'Guwahati', 'Firozabad', 'Jhansi', 'Sangli-Miraj-Kupwad',
    'Dehradun', 'Kolhapur', 'Nellore', 'Kurnool', 'Amravati',
    'Mangaluru', 'Guntur', 'Ujjain', 'Korba', 'Jalgaon', 'Patiala',
    'Silchar', 'Dewas', 'Imphal', 'Udaipur', 'Shivamogga', 'Itanagar',
    'Alwar', 'Agartala', 'Nagpur', 'Gangtok', 'Sagar', 'Shimla',
    'Visakhapatnam', 'Panaji', 'Gurugram', 'Kohima', 'Tiruchirapalli',
    'Vijayawada', 'Hubballi-Dharwad', 'Bhubaneshwar', 'Mangalore',
    'Aizawl', 'Jalpaiguri', 'Thoothukkudi', 'Durgapur', 'Raurkela',
    'Shillong', 'Nalgonda'
];

const selectedType = ref("Time Series Data");
const selectedCity = ref("Total");

// Function to trigger the dataset download
const downloadDataset = async () => {
    if (!selectedType || !selectedCity) return;

    const folder = selectedType.value === "Time Series Data" ? "summary_time_series" : "summary_grid";
    var fileName = `${selectedCity.value.replace(" ", "_")}.csv`; // File format assumed to be CSV
    if (fileName === "Total.csv") {
        fileName = "total.csv";
    }
    const fileUrl = `${baseUrl}${folder}/${fileName}`;

    // console.log("Downloading:", selectedType);

    try {
        const response = await fetch(fileUrl);
        if (!response.ok) {
            throw new Error("File not found or unavailable.");
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error("Download failed:", error);
    }
};
</script>