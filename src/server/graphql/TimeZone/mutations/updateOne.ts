import { mutationField, nonNull } from 'nexus'

export const TimeZoneUpdateOneMutation = mutationField('updateOneTimeZone', {
  type: nonNull('TimeZone'),
  args: {
    where: nonNull('TimeZoneWhereUniqueInput'),
    data: nonNull('TimeZoneUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.timeZone.update({
      where,
      data,
      ...select,
    })
  },
})
