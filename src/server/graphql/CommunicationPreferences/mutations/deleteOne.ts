import { mutationField, nonNull } from 'nexus'

export const CommunicationPreferencesDeleteOneMutation = mutationField(
  'deleteOneCommunicationPreferences',
  {
    type: 'CommunicationPreferences',
    args: {
      where: nonNull('CommunicationPreferencesWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.communicationPreferences.delete({
        where,
        ...select,
      })
    },
  },
)
