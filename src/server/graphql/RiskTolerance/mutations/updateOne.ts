import { mutationField, nonNull } from 'nexus'

export const RiskToleranceUpdateOneMutation = mutationField(
  'updateOneRiskTolerance',
  {
    type: nonNull('RiskTolerance'),
    args: {
      where: nonNull('RiskToleranceWhereUniqueInput'),
      data: nonNull('RiskToleranceUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.riskTolerance.update({
        where,
        data,
        ...select,
      })
    },
  },
)
