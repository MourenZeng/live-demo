// frontend/src/utils/DeviceAdaptation.js
import { ref } from 'vue'

export function useDevice() {
    const isMobile = ref(isMobileDevice())

    const updateDeviceType = () => {
        isMobile.value = isMobileDevice()
    }

    window.addEventListener('resize', updateDeviceType)

    return { isMobile }
}

function isMobileDevice() {
    return window.matchMedia("(max-width: 768px)").matches ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}