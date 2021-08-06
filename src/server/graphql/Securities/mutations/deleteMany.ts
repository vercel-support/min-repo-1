import { mutationField, nonNull } from 'nexus'

export const SecuritiesDeleteManyMutation = mutationField(
  'deleteManySecurities',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'SecuritiesWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.securities.deleteMany({ where } as any)
    },
  },
)
