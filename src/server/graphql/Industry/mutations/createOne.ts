import { mutationField, nonNull } from 'nexus'

export const IndustryCreateOneMutation = mutationField('createOneIndustry', {
  type: nonNull('Industry'),
  args: {
    data: nonNull('IndustryCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.industry.create({
      data,
      ...select,
    })
  },
})
