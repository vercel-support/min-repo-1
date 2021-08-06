import { mutationField, nonNull } from 'nexus'

export const CommunicationPreferencesUpsertOneMutation = mutationField(
  'upsertOneCommunicationPreferences',
  {
    type: nonNull('CommunicationPreferences'),
    args: {
      where: nonNull('CommunicationPreferencesWhereUniqueInput'),
      create: nonNull('CommunicationPreferencesCreateInput'),
      update: nonNull('CommunicationPreferencesUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.communicationPreferences.upsert({
        ...args,
        ...select,
      })
    },
  },
)
