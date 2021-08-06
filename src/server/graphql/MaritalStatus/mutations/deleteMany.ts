import { mutationField, nonNull } from 'nexus'

export const MaritalStatusDeleteManyMutation = mutationField(
  'deleteManyMaritalStatus',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'MaritalStatusWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.maritalStatus.deleteMany({ where } as any)
    },
  },
)
