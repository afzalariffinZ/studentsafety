import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Platform, SafeAreaView, TouchableOpacity, Modal, Pressable } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

// Professional color palette inspired by UM Touch
const AppColors = {
  primary: '#1e3a8a', // Deep blue
  secondary: '#0f172a', // Navy
  accent: '#3b82f6', // Blue
  success: '#059669', // Green
  warning: '#d97706', // Orange
  danger: '#dc2626', // Red
  white: '#ffffff',
  black: '#000000',
  gray: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  }
};

export default function HomeScreen() {
  const [isEmergencyModalVisible, setIsEmergencyModalVisible] = useState(false);

  const handleEmergencyPress = () => {
    setIsEmergencyModalVisible(true);
  };

  const handleCloseEmergency = () => {
    setIsEmergencyModalVisible(false);
  };

  const handleCallEmergency = () => {
    // In a real app, this would make an actual emergency call
    console.log('Emergency call initiated');
  };

  const handleAlertContacts = () => {
    // In a real app, this would alert emergency contacts
    console.log('Emergency contacts alerted');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.profileSection}>
              <View style={styles.profileIcon}>
                <Ionicons name="person" size={20} color={AppColors.white} />
              </View>
              <View style={styles.profileText}>
                <Text style={styles.welcomeText}>Welcome back</Text>
                <Text style={styles.userName}>ILHAM FAKHRI BIN MOHD FADHIL</Text>
                <Text style={styles.safetyText}>Stay safe today</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.settingsButton}>
              <Ionicons name="settings-outline" size={20} color={AppColors.gray[600]} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Emergency SOS Button */}
        <View style={styles.emergencySection}>
          <TouchableOpacity style={styles.emergencySOSButton} onPress={handleEmergencyPress}>
            <View style={styles.emergencyIconContainer}>
              <MaterialIcons name="warning" size={28} color={AppColors.white} />
            </View>
            <Text style={styles.emergencySOSText}>Emergency SOS</Text>
          </TouchableOpacity>
        </View>

        {/* Report Incident */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.reportButton}>
            <MaterialIcons name="report-problem" size={20} color={AppColors.gray[600]} />
            <Text style={styles.reportText}>Report Incident</Text>
          </TouchableOpacity>
        </View>

        {/* Safety Mode */}
        <View style={styles.section}>
          <View style={styles.safetyModeCard}>
            <View style={styles.safetyModeContent}>
              <MaterialIcons name="security" size={20} color={AppColors.gray[600]} />
              <View style={styles.safetyModeTextContainer}>
                <Text style={styles.safetyModeTitle}>Safety Mode</Text>
                <Text style={styles.safetyModeSubtitle}>Tap to activate</Text>
              </View>
            </View>
            <View style={styles.toggleSwitch}>
              <View style={styles.toggleKnob} />
            </View>
          </View>
        </View>

        {/* Current Location */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialIcons name="location-on" size={20} color={AppColors.gray[600]} />
            <Text style={styles.currentLocationTitle}>Current Location</Text>
          </View>
          <View style={styles.locationCard}>
            <View style={styles.locationIconContainer}>
              <Ionicons name="location-outline" size={32} color={AppColors.primary} />
            </View>
            <View style={styles.locationTextContainer}>
              <Text style={styles.locationName}>Main Campus</Text>
              <Text style={styles.locationBuilding}>Student Union Building</Text>
            </View>
          </View>
        </View>

        {/* Quick Access */}
        <View style={styles.section}>
          <Text style={styles.quickAccessTitle}>Quick Access</Text>
          <TouchableOpacity style={styles.quickAccessItem}>
            <Ionicons name="time-outline" size={20} color={AppColors.gray[600]} />
            <Text style={styles.quickAccessText}>View Report History</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom spacing */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Emergency Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isEmergencyModalVisible}
        onRequestClose={handleCloseEmergency}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.emergencyModal}>
            {/* Header */}
            <View style={styles.emergencyModalHeader}>
              <TouchableOpacity onPress={handleCloseEmergency} style={styles.backButton}>
                <Ionicons name="arrow-back" size={18} color={AppColors.danger} />
              </TouchableOpacity>
              <Text style={styles.emergencyModalTitle}>Emergency Report</Text>
              <View style={styles.headerSpacer} />
            </View>

            {/* Emergency SOS Card */}
            <View style={styles.emergencySOSCard}>
              <View style={styles.emergencyWarningIconContainer}>
                <MaterialIcons name="warning" size={32} color={AppColors.danger} />
              </View>
              <Text style={styles.emergencySOSTitle}>Emergency SOS</Text>
              <Text style={styles.emergencySOSSubtitle}>Press and hold to activate emergency protocol</Text>
              
              <TouchableOpacity 
                style={styles.emergencySOSButtonModal}
                onPress={handleCallEmergency}
              >
                <MaterialIcons name="emergency" size={24} color={AppColors.white} />
                <Text style={styles.emergencySOSButtonText}>EMERGENCY</Text>
              </TouchableOpacity>
            </View>

            {/* Location Card */}
            <View style={styles.locationCardModal}>
              <View style={styles.locationCardHeader}>
                <Ionicons name="location" size={20} color={AppColors.primary} />
                <Text style={styles.locationCardTitle}>Your Location</Text>
              </View>
              <View style={styles.locationDetails}>
                <Text style={styles.locationNameModal}>Main Campus - Student Union</Text>
                <Text style={styles.locationCoordinates}>Lat: 40.7829, Lng: -73.9654</Text>
                <Text style={styles.locationAccuracy}>Accuracy: ±3 meters</Text>
              </View>
            </View>

            {/* Quick Actions */}
            <View style={styles.quickActionsCard}>
              <Text style={styles.quickActionsTitle}>Quick Actions</Text>
              <View style={styles.quickActionButtons}>
                <TouchableOpacity style={styles.quickActionButton} onPress={handleCallEmergency}>
                  <Ionicons name="call" size={24} color={AppColors.danger} />
                  <Text style={styles.quickActionText}>Call 911</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.quickActionButton} onPress={handleAlertContacts}>
                  <Ionicons name="people" size={24} color={AppColors.primary} />
                  <Text style={styles.quickActionText}>Alert Contacts</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.gray[50],
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    backgroundColor: AppColors.white,
    paddingTop: 20,
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.gray[100],
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: AppColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  profileIconText: {
    fontSize: 16,
    color: AppColors.white,
  },
  profileText: {
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: '600',
    color: AppColors.gray[800],
    marginBottom: 2,
    letterSpacing: -0.2,
  },
  userName: {
    fontSize: 14,
    fontWeight: '700',
    color: AppColors.gray[900],
    marginBottom: 2,
    letterSpacing: -0.1,
  },
  safetyText: {
    fontSize: 14,
    color: AppColors.gray[500],
    fontWeight: '400',
    letterSpacing: -0.1,
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: AppColors.gray[50],
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsIcon: {
    fontSize: 16,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: AppColors.gray[800],
    marginBottom: 16,
    marginLeft: 8,
    letterSpacing: -0.2,
  },
  emergencySection: {
    paddingHorizontal: 20,
    marginTop: 32,
  },
  emergencySOSButton: {
    backgroundColor: AppColors.danger,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    flexDirection: 'row',
  },
  emergencyIconContainer: {
    marginRight: 12,
  },
  emergencyWarningIcon: {
    fontSize: 24,
    color: AppColors.white,
    marginBottom: 8,
  },
  emergencySOSText: {
    fontSize: 18,
    fontWeight: '600',
    color: AppColors.white,
    letterSpacing: -0.3,
    marginTop: 4,
  },
  reportButton: {
    backgroundColor: AppColors.white,
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 1,
    borderColor: AppColors.gray[100],
  },
  reportIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  reportText: {
    fontSize: 16,
    color: AppColors.gray[800],
    fontWeight: '500',
    marginLeft: 12,
    letterSpacing: -0.2,
  },
  safetyModeCard: {
    backgroundColor: AppColors.white,
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 1,
    borderColor: AppColors.gray[100],
  },
  safetyModeContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  safetyModeIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  safetyModeTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  safetyModeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: AppColors.gray[800],
    marginBottom: 2,
    letterSpacing: -0.2,
  },
  safetyModeSubtitle: {
    fontSize: 14,
    color: AppColors.gray[500],
    letterSpacing: -0.1,
  },
  toggleSwitch: {
    width: 50,
    height: 30,
    borderRadius: 15,
    backgroundColor: AppColors.gray[200],
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 3,
  },
  toggleKnob: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: AppColors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  currentLocationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: AppColors.gray[800],
    marginLeft: 8,
    letterSpacing: -0.2,
  },
  locationCard: {
    backgroundColor: AppColors.gray[50],
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  locationIconContainer: {
    marginBottom: 12,
  },
  locationMapIcon: {
    fontSize: 32,
  },
  locationTextContainer: {
    alignItems: 'center',
  },
  locationName: {
    fontSize: 16,
    fontWeight: '600',
    color: AppColors.gray[800],
    marginBottom: 4,
    letterSpacing: -0.2,
  },
  locationBuilding: {
    fontSize: 14,
    color: AppColors.gray[600],
    letterSpacing: -0.1,
  },
  quickAccessTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: AppColors.gray[800],
    marginBottom: 16,
    letterSpacing: -0.2,
  },
  quickAccessItem: {
    backgroundColor: AppColors.white,
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 1,
    borderColor: AppColors.gray[100],
  },
  quickAccessIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  quickAccessText: {
    fontSize: 16,
    color: AppColors.gray[800],
    fontWeight: '500',
    marginLeft: 12,
    letterSpacing: -0.2,
  },
  // Emergency Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  emergencyModal: {
    backgroundColor: AppColors.gray[50],
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 20,
    maxHeight: '85%',
  },
  emergencyModalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.gray[200],
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: AppColors.gray[100],
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 18,
    color: AppColors.danger,
    fontWeight: 'bold',
  },
  emergencyModalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: AppColors.danger,
    textAlign: 'center',
    flex: 1,
  },
  headerSpacer: {
    width: 40,
  },
  emergencySOSCard: {
    backgroundColor: AppColors.white,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 2,
    borderColor: AppColors.danger,
  },
  emergencyWarningIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(220, 38, 38, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  warningTriangle: {
    fontSize: 32,
    color: AppColors.danger,
  },
  emergencySOSTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: AppColors.danger,
    marginBottom: 8,
    textAlign: 'center',
  },
  emergencySOSSubtitle: {
    fontSize: 14,
    color: AppColors.gray[600],
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  emergencySOSButtonModal: {
    backgroundColor: AppColors.danger,
    borderRadius: 100,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: AppColors.danger,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  emergencySOSButtonIcon: {
    fontSize: 24,
    color: AppColors.white,
    marginBottom: 4,
  },
  emergencySOSButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: AppColors.white,
    textAlign: 'center',
  },
  locationCardModal: {
    backgroundColor: AppColors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  locationCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationIconModal: {
    fontSize: 20,
    marginRight: 8,
  },
  locationCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: AppColors.gray[800],
  },
  locationDetails: {
    backgroundColor: AppColors.gray[50],
    borderRadius: 8,
    padding: 12,
  },
  locationNameModal: {
    fontSize: 14,
    fontWeight: '600',
    color: AppColors.gray[800],
    marginBottom: 4,
  },
  locationCoordinates: {
    fontSize: 12,
    color: AppColors.gray[600],
    fontFamily: 'monospace',
    marginBottom: 2,
  },
  locationAccuracy: {
    fontSize: 12,
    color: AppColors.gray[500],
  },
  quickActionsCard: {
    backgroundColor: AppColors.white,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  quickActionsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: AppColors.gray[800],
    marginBottom: 16,
  },
  quickActionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  quickActionButton: {
    flex: 1,
    backgroundColor: AppColors.gray[50],
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: AppColors.gray[200],
  },
  quickActionIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 12,
    fontWeight: '600',
    color: AppColors.gray[700],
    textAlign: 'center',
  },
});
