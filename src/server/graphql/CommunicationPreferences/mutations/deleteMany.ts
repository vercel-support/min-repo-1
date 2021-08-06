import { mutationField, nonNull } from 'nexus'

export const CommunicationPreferencesDeleteManyMutation = mutationField(
  'deleteManyCommunicationPreferences',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'CommunicationPreferencesWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.communicationPreferences.deleteMany({ where } as any)
    },
  },
)
