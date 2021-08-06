import { mutationField, nonNull } from 'nexus'

export const SecuritiesDeleteOneMutation = mutationField(
  'deleteOneSecurities',
  {
    type: 'Securities',
    args: {
      where: nonNull('SecuritiesWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.securities.delete({
        where,
        ...select,
      })
    },
  },
)
