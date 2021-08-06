import { mutationField, nonNull } from 'nexus'

export const FrequencyDeleteManyMutation = mutationField(
  'deleteManyFrequency',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FrequencyWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.frequency.deleteMany({ where } as any)
    },
  },
)
