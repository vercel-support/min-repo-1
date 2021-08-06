import { mutationField, nonNull } from 'nexus'

export const MaritalStatusUpdateManyMutation = mutationField(
  'updateManyMaritalStatus',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'MaritalStatusWhereInput',
      data: nonNull('MaritalStatusUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.maritalStatus.updateMany(args as any)
    },
  },
)
