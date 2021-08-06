import { mutationField, nonNull } from 'nexus'

export const SecuritiesUpdateManyMutation = mutationField(
  'updateManySecurities',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'SecuritiesWhereInput',
      data: nonNull('SecuritiesUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.securities.updateMany(args as any)
    },
  },
)
