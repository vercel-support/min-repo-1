import { mutationField, nonNull } from 'nexus'

export const CommunicationPreferencesUpdateOneMutation = mutationField(
  'updateOneCommunicationPreferences',
  {
    type: nonNull('CommunicationPreferences'),
    args: {
      where: nonNull('CommunicationPreferencesWhereUniqueInput'),
      data: nonNull('CommunicationPreferencesUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.communicationPreferences.update({
        where,
        data,
        ...select,
      })
    },
  },
)
