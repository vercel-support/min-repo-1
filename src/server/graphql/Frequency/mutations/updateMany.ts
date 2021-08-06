import { mutationField, nonNull } from 'nexus'

export const FrequencyUpdateManyMutation = mutationField(
  'updateManyFrequency',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FrequencyWhereInput',
      data: nonNull('FrequencyUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.frequency.updateMany(args as any)
    },
  },
)
