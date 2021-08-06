import { mutationField, nonNull } from 'nexus'

export const TimeZoneDeleteOneMutation = mutationField('deleteOneTimeZone', {
  type: 'TimeZone',
  args: {
    where: nonNull('TimeZoneWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.timeZone.delete({
      where,
      ...select,
    })
  },
})
