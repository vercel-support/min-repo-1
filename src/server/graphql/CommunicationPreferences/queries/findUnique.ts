import { queryField, nonNull } from 'nexus'

export const CommunicationPreferencesFindUniqueQuery = queryField(
  'findUniqueCommunicationPreferences',
  {
    type: 'CommunicationPreferences',
    args: {
      where: nonNull('CommunicationPreferencesWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.communicationPreferences.findUnique({
        where,
        ...select,
      })
    },
  },
)
