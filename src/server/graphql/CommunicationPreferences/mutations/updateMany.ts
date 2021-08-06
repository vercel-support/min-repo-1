import { mutationField, nonNull } from 'nexus'

export const CommunicationPreferencesUpdateManyMutation = mutationField(
  'updateManyCommunicationPreferences',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'CommunicationPreferencesWhereInput',
      data: nonNull('CommunicationPreferencesUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.communicationPreferences.updateMany(args as any)
    },
  },
)
