import { mutationField, nonNull } from 'nexus'

export const CommunicationPreferencesCreateOneMutation = mutationField(
  'createOneCommunicationPreferences',
  {
    type: nonNull('CommunicationPreferences'),
    args: {
      data: nonNull('CommunicationPreferencesCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.communicationPreferences.create({
        data,
        ...select,
      })
    },
  },
)
